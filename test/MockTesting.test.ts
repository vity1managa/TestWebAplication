import UserService from '../src/UserService';

// More explicit mock testing (Mockito-like approach)
describe('Mock Testing - UserService', () => {
  it('should properly mock UserService methods', () => {
    // Create a real instance
    const userService = new UserService();

    // Spy on methods to track calls (similar to Mockito's spy)
    const getAllUsersSpy = jest.spyOn(userService, 'getAllUsers');
    const getUserByIdSpy = jest.spyOn(userService, 'getUserById');

    // Call the methods
    const allUsers = userService.getAllUsers();
    const user = userService.getUserById(1);

    // Assertions
    expect(getAllUsersSpy).toHaveBeenCalled();
    expect(getUserByIdSpy).toHaveBeenCalledWith(1);
    expect(allUsers).toHaveLength(3);
    expect(user).toBeDefined();

    // Restore original methods
    getAllUsersSpy.mockRestore();
    getUserByIdSpy.mockRestore();
  });

  it('should mock return values (like Mockito.when)', () => {
    const userService = new UserService();

    // Mock a method to return specific values (similar to Mockito.when())
    const mockGetAllUsers = jest.spyOn(userService, 'getAllUsers')
      .mockReturnValue([
        { id: 1, name: 'Mocked User', email: 'mock@example.com' }
      ]);

    const users = userService.getAllUsers();

    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('Mocked User');

    // Restore original method
    mockGetAllUsers.mockRestore();
  });

  it('should verify interactions (like Mockito.verify)', () => {
    const userService = new UserService();
    const spy = jest.spyOn(userService, 'getUserById');

    // Call the method
    userService.getUserById(1);

    // Verify the interaction occurred
    expect(spy).toHaveBeenCalledWith(1);
    expect(spy).toHaveBeenCalledTimes(1);

    // Restore original method
    spy.mockRestore();
  });

  it('should test with mocked dependencies', () => {
    // Create a mock object with specific behavior (like Mockito.mock())
    const mockUserService = {
      getAllUsers: jest.fn(),
      getUserById: jest.fn(),
      addUser: jest.fn()
    };

    // Define mock behavior (like Mockito.when())
    mockUserService.getAllUsers.mockReturnValue([
      { id: 1, name: 'Test User', email: 'test@example.com' }
    ]);
    
    mockUserService.getUserById.mockReturnValue(
      { id: 1, name: 'Test User', email: 'test@example.com' }
    );

    // Test with the mock
    const users = mockUserService.getAllUsers();
    const user = mockUserService.getUserById(1);

    // Verify interactions (like Mockito.verify())
    expect(mockUserService.getAllUsers).toHaveBeenCalledTimes(1);
    expect(mockUserService.getUserById).toHaveBeenCalledWith(1);
    expect(users).toHaveLength(1);
    expect(user).toBeDefined();
  });
});