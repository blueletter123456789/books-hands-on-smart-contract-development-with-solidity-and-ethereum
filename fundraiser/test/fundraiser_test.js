const FundraiserContract = artifacts.require('Fundraiser')

// describe は上から順番に実行される
// it は上から順番に実行される
// beforeEach, afterEach は 各 it の前後 で実行される
// before は describe の最初に一度だけ 実行される
// after は describe の最後に一度だけ 実行される

contract('Fundraiser', (accounts) => {
  let fundraiser
  const name = 'Beneficiary Name'

  describe('initialization', () => {
    beforeEach(async () => {
      fundraiser = await FundraiserContract.new(name)
    })

    it('gets the beneficiary name', async () => {
      const actual = await fundraiser.name()
      assert.equal(actual, name, 'names should match')
    })
  })
})
