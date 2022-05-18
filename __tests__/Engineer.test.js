const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');

    expect(engineer.name).toBe("Test");
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer name', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');
    expect(engineer.getName()).toBe('Test');
});

test('gets Engineer id', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');
    expect(engineer.getId()).toBe('01');
});

test('gets Engineer email', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');
    expect(engineer.getEmail()).toBe('Test@test.com');
});

test('gets Engineer github', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');
    expect(engineer.getGithub()).toBe('Test');
});

test('gets Engineer role', () => {
    const engineer = new Engineer('Test', '01', 'Test@test.com', 'Test');
    expect(engineer.getRole()).toBe('Engineer');
});