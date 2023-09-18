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
        date: commit.commit.date,
        message: commit.commit.message,
      }));
    } catch (error) {
      throw new NotFoundException(JSON.stringify(error.message));
    }
  }

  async findOne(id: number): Promise<Commit> {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/gonzalogil23/commits-history/commits/${id}`,
      );
      if (response.status === 200) {
        const commit = response.data;
        return {
          id: commit.sha,
          date: commit.commit.date,
          message: commit.commit.message,
        };
      }
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
