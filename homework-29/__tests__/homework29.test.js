const {weekFn, ageClassification} = require ('../homework29.js');
describe('ageClassification', () => {
    it('повертає null для -1', () => {
        expect(ageClassification(-1)).toBeNull()
    })
    it('повертає null для 0', () => {
        expect(ageClassification(0)).toBeNull()
    })
    it('повертає Дитинство для 1', () => {
        expect(ageClassification(1)).toBe('Дитинство')
    })
    it('повертає Дитинство для 24', () => {
        expect(ageClassification(24)).toBe('Дитинство')
    })
    it('повертає Молодість для 24.01', () => {
        expect(ageClassification(24.01)).toBe('Молодість')
    })
    it('повертає Молодість для 44', () => {
        expect(ageClassification(44)).toBe('Молодість')
    })
    it('повертає Зрілість для 44.01', () => {
        expect(ageClassification(44.01)).toBe('Зрілість')
    })
    it('повертає Зрілість для 65', () => {
        expect(ageClassification(65)).toBe('Зрілість')
    })
    it('повертає Старість для 65.01', () => {
        expect(ageClassification(65.01)).toBe('Старість')
    })
    it('повертає Старість для 75', () => {
        expect(ageClassification(75)).toBe('Старість')
    })
    it('повертає Довголіття для 75.01', () => {
        expect(ageClassification(75.01)).toBe('Довголіття')
    })
    it('повертає Довголіття для 90', () => {
        expect(ageClassification(90)).toBe('Довголіття')
    })
    it('повертає Рекорд для 90.01', () => {
        expect(ageClassification(90.01)).toBe('Рекорд')
    })
    it('повертає Рекорд для 122', () => {
        expect(ageClassification(122)).toBe('Рекорд')
    })
    it('повертає null для 122.01', () => {
        expect(ageClassification(122.01)).toBeNull()
    })
    it('повертає null для 150', () => {
        expect(ageClassification(150)).toBeNull()
    })
})
describe('weekFn', () => {
    it('Повертає Понеділок', () => {
        expect(weekFn(1)).toBe('Понеділок')
    })
    it('Повертає Середа', () => {
        expect(weekFn(3)).toBe('Середа')
    })
    it('Повертає Неділя', () => {
        expect(weekFn(7)).toBe('Неділя')
    })
    it('Повертає null', () => {
        expect(weekFn(9)).toBeNull()
    })
    it('Повертає null', () => {
        expect(weekFn(1.5)).toBeNull()
    })
    it('Повертає null', () => {
        expect(weekFn('2')).toBeNull()
    })
})