import { deserialise } from './deserialise'

describe('deserialise', () => {
  it('Should do something', async () => {
    await expect(deserialise({
      data: [{
        id: '1',
        type: 'users',
        attributes: {
          name: 'Josh'
        },
        relationships: {
          waifu: {
            data: {
              id: '1',
              type: 'characters'
            }
          }
        }
      }],
      included: [{
        id: '1',
        type: 'characters',
        attributes: {
          name: 'Genkai'
        }
      }]
    })).resolves.toEqual({
      data: [{
        attributes: {
          name: 'Josh',
          waifu: {
            attributes: {
              name: 'Genkai'
            },
            id: '1',
            type: 'characters'
          }
        },
        id: '1',
        type: 'users'
      }]
    })
  })
})
