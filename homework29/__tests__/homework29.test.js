const {weekFn, ageClassification} = require('../homework29.js');
describe('ageClassification', () => {
    test('повертає null для -1', () => {
        expect(ageClassification(-1)).toBeNull()
    })
    test('повертає null для 0', () => {
        expect(ageClassification(0)).toBeNull()
    })
    test('повертає Дитинство для 1', () => {
        expect(ageClassification(1)).toBe('Дитинство')
    })
    test('повертає Дитинство для 24', () => {
        expect(ageClassification(24)).toBe('Дитинство')
    })
    test('повертає Молодість для 24.01', () => {
        expect(ageClassification(24.01)).toBe('Молодість')
    })
    test('повертає Молодість для 44', () => {
        expect(ageClassification(44)).toBe('Молодість')
    })
    test('повертає Зрілість для 44.01', () => {
        expect(ageClassification(44.01)).toBe('Зрілість')
    })
    test('повертає Зрілість для 65', () => {
        expect(ageClassification(65)).toBe('Зрілість')
    })
    test('повертає Старість для 65.01', () => {
        expect(ageClassification(65.01)).toBe('Старість')
    })
    test('повертає Старість для 75', () => {
        expect(ageClassification(75)).toBe('Старість')
    })
    test('повертає Довголіття для 75.01', () => {
        expect(ageClassification(75.01)).toBe('Довголіття')
    })
    test('повертає Довголіття для 90', () => {
        expect(ageClassification(90)).toBe('Довголіття')
    })
    test('повертає Рекорд для 90.01', () => {
        expect(ageClassification(90.01)).toBe('Рекорд')
    })
    test('повертає Рекорд для 122', () => {
        expect(ageClassification(122)).toBe('Рекорд')
    })
    test('повертає null для 122.01', () => {
        expect(ageClassification(122.01)).toBeNull()
    })
    test('повертає null для 150', () => {
        expect(ageClassification(150)).toBeNull()
    })
})
describe('weekFn', () => {
    test('Повертає Понеділок', () => {
        expect(weekFn(1)).toBe('Понеділок')
    })
    test('Повертає Середа', () => {
        expect(weekFn(3)).toBe('Середа')
    })
    test('Повертає Неділя', () => {
        expect(weekFn(7)).toBe('Неділя')
    })
    test('Повертає null', () => {
        expect(weekFn(9)).toBeNull()
    })
    test('Повертає null', () => {
        expect(weekFn(1.5)).toBeNull()
    })
    test('Повертає null', () => {
        expect(weekFn('2')).toBeNull()
    })
})