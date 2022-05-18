const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com');

    expect(engineer.name).toBe("Test");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets Engineer name', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com');
    expect(engineer.getName()).toBe('Test');
});

test('gets Engineer id', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com');
    expect(engineer.getId()).toBe('01');
});

test('gets Engineer email', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com');
    expect(engineer.getEmail()).toBe('Test@test.com');
});

test('gets Engineer role', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com');
    expect(engineer.getRole()).toBe('Engineer');
});