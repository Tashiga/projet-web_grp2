import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
    let resolver: UserResolver;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [UserResolver],
      }).compile();
  
      resolver = module.get<UserResolver>(UserResolver);
    });
  
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  
    it('should create a user', () => {
      const result = resolver.createUser('testUser', 'testPassword');
      expect(result).toBeDefined();
      expect(result.username).toBe('testUser');
      expect(result.passeword).toBe('testPassword');
    });
  
    it('should get a user', () => {
      resolver.createUser('testUser', 'testPassword');
      const result = resolver.getUser(1);
      expect(result).toBeDefined();
      expect(result.username).toBe('testUser');
      expect(result.passeword).toBe('testPassword');
    });
  
    it('should update a user', () => {
      resolver.createUser('testUser', 'testPassword');
      const result = resolver.updateUser(1, 'updatedUser', 'updatedPassword');
      expect(result).toBeDefined();
      expect(result.username).toBe('updatedUser');
      expect(result.passeword).toBe('updatedPassword');
    });
  
    it('should delete a user', () => {
      resolver.createUser('testUser', 'testPassword');
      const result = resolver.deleteUser(1);
      expect(result).toBe(true);
    });
  });