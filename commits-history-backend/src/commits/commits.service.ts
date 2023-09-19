import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import { Commit } from './entities/commit.entity';

@Injectable()
export class CommitsService {
  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }

  async findAll(): Promise<Commit[]> {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/gonzalogil23/commits-history/commits',
      );
      const commits = response.data;
      return commits.map((commit) => ({
        id: commit.sha,
        date: commit.commit.author.date,
        message: commit.commit.message,
        url: commit.html_url,
        author: commit.commit.author.name,
      }));
    } catch (error) {
      throw new NotFoundException(JSON.stringify(error.message));
    }
  }

  async findOne(id: string) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/gonzalogil23/commits-history/commits/${id}`,
      );
      const commit = response.data;
      return {
        date: commit.commit.author.date,
        message: commit.commit.message,
        url: commit.html_url,
        author: commit.commit.author.name,
      };
    } catch (error) {
      throw new NotFoundException(JSON.stringify(error.message));
    }
  }

  update(id: number, updateCommitDto: UpdateCommitDto) {
    return `This action updates a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
