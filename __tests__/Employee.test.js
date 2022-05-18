const { expect } = require("expect");
const Employee = require("../lib/Employee");

test('create employee object', () => {
    const employee = new Employee('Test', '01', 'Test@test.com');

    expect(employee.name).toBe("Test");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Test', '01', 'Test@test.com');
    expect(employee.getName()).toBe('Test');
});

test('gets employee id', () => {
    const employee = new Employee('Test', '01', 'Test@test.com');
    expect(employee.getId()).toBe('01');
});

test('gets employee email', () => {
    const employee = new Employee('Test', '01', 'Test@test.com');
    expect(employee.getEmail()).toBe('Test@test.com');
});

test('gets employee role', () => {
    const employee = new Employee('Test', '01', 'Test@test.com');
    expect(employee.getRole()).toBe('Employee');
});