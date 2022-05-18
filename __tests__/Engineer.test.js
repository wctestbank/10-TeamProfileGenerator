const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Test', '01', 'Test@test.com');

    expect(manager.name).toBe("Test");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test('gets Manager name', () => {
    const manager = new Manager('Test', '01', 'Test@test.com');
    expect(manager.getName()).toBe('Test');
});

test('gets Manager id', () => {
    const manager = new Manager('Test', '01', 'Test@test.com');
    expect(manager.getId()).toBe('01');
});

test('gets Manager email', () => {
    const manager = new Manager('Test', '01', 'Test@test.com');
    expect(manager.getEmail()).toBe('Test@test.com');
});

test('gets Manager role', () => {
    const manager = new Manager('Test', '01', 'Test@test.com');
    expect(manager.getRole()).toBe('Manager');
});