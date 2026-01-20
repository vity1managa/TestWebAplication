interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  public getAllUsers(): User[] {
    return [...this.users]; // Return a copy to prevent external modification
  }

  public getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  public addUser(user: Omit<User, 'id'>): User {
    const newId = Math.max(...this.users.map(u => u.id)) + 1 || 1;
    const newUser: User = { ...user, id: newId };
    this.users.push(newUser);
    return newUser;
  }

  public updateUser(id: number, userData: Partial<Omit<User, 'id'>>): User | undefined {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...userData };
      return this.users[index];
    }
    return undefined;
  }

  public deleteUser(id: number): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    return initialLength !== this.users.length;
  }
}

export default UserService;
export { User };