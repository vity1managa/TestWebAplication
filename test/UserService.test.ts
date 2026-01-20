import UserService from '../src/UserService';
import { User } from '../src/UserService';

// Mocking UserService for testing purposes (similar to Mockito approach)
describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('getAllUsers', () => {
    it('should return all users', () => {
      const users = userService.getAllUsers();
      
      expect(users).toHaveLength(3);
      expect(users[0]).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      });
    });
  });

  describe('getUserById', () => {
    it('should return user with matching id', () => {
      const user = userService.getUserById(1);
      
      expect(user).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      });
    });

    it('should return undefined for non-existent id', () => {
      const user = userService.getUserById(999);
      
      expect(user).toBeUndefined();
    });
  });

  describe('addUser', () => {
    it('should add a new user with auto-generated id', () => {
      const newUser = {
        name: 'Alice Brown',
        email: 'alice@example.com'
      };

      const addedUser = userService.addUser(newUser);

      expect(addedUser.id).toBe(4); // Next id after existing users
      expect(addedUser.name).toBe('Alice Brown');
      expect(addedUser.email).toBe('alice@example.com');
    });
  });

  describe('updateUser', () => {
    it('should update existing user', () => {
      const updatedUser = userService.updateUser(1, {
        name: 'John Updated'
      });

      expect(updatedUser).toEqual({
        id: 1,
        name: 'John Updated',
        email: 'john@example.com'
      });
    });

    it('should return undefined when updating non-existent user', () => {
      const result = userService.updateUser(999, {
        name: 'Non-existent'
      });

      expect(result).toBeUndefined();
    });
  });

  describe('deleteUser', () => {
    it('should delete existing user', () => {
      const initialCount = userService.getAllUsers().length;
      const result = userService.deleteUser(1);
      const finalCount = userService.getAllUsers().length;

      expect(result).toBe(true);
      expect(finalCount).toBe(initialCount - 1);
    });

    it('should return false when deleting non-existent user', () => {
      const result = userService.deleteUser(999);
      
      expect(result).toBe(false);
    });
  });
});