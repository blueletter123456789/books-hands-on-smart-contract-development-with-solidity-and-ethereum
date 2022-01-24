const GreeterContract = artifacts.require('Greeter')

contract('Greeter', () => {
  it('has been deployed successfully', async () => {
    const greeter = await GreeterContract.deployed()
    assert(greeter, 'contract was not deployed')
  })

  describe('greet()', () => {
    it('returns "Hello, World!"', async () => {
      const greeter = await GreeterContract.deployed()
      const expocted = 'Hello, World!'
      const actual = await greeter.greet()
      assert.equal(actual, expocted, 'greeted with "Hello World!')
    })
  })
})
