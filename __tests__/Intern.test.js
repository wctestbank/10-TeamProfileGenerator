const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');

    expect(intern.name).toBe("Test");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets Intern name', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');
    expect(intern.getName()).toBe('Test');
});

test('gets Intern id', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');
    expect(intern.getId()).toBe('01');
});

test('gets Intern email', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');
    expect(intern.getEmail()).toBe('Test@test.com');
});

test('gets Intern school', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');
    expect(intern.getSchool()).toBe('TestSchool');
});

test('gets Intern role', () => {
    const intern = new Intern('Test', '01', 'Test@test.com', 'TestSchool');
    expect(intern.getRole()).toBe('Intern');
});