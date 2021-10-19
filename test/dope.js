const Dope = artifacts.require('Dope');

contract('Dope test', ([alice, dev]) => {

    beforeEach(async () => {
        this.dope = await Dope.new(dev, {from: dev});
    });

    it('should set admin properly', async () => {
        await this.dope.setAdmin(alice, {from: dev});
        assert.equal(
            (await this.dope.admin()).toString(),
            alice
        );
    });

    it('should set controller properly', async () => {
        await this.dope.setController(alice, {from: dev});
        assert.equal(
            (await this.dope.controller()).toString(),
            alice
        );
    });

    it('should set portfolio factory properly', async () => {
        await this.dope.setFactory(alice, {from: dev});
        assert.equal(
            (await this.dope.factory()).toString(),
            alice
        );
    });

    it('should set lock properly', async () => {
        await this.dope.setLock(alice, {from: dev});
        assert.equal(
            (await this.dope.lock()).toString(),
            alice
        );
    });

    it('should add minter properly', async () => {
        await this.dope.addMinter(alice, {from: dev});
        assert.equal(
            (await this.dope.isMinter(alice)).toString(),
            "true"
        );
    });

    it('should mint properly', async () => {
        await this.dope.addMinter(dev, {from: dev});
        await this.dope.mint(alice, "1", {from: dev});
        assert.equal(
            (await this.dope.balanceOf(alice)).toString(),
            "1"
        );
    });

    it('should burn properly', async () => {
        await this.dope.addMinter(dev, {from: dev});
        await this.dope.mint(alice, "1", {from: dev});
        await this.dope.burn("1", {from: alice});
        assert.equal(
            (await this.dope.balanceOf(alice)).toString(),
            "0"
        );
    });
});