const Prueba = artifacts.require("Prueba");

contract("Prueba", (accounts) => {
    let instance;

    beforeEach("deploys a contract", async () => {
        instance = await Prueba.new();
    });

    it("Get word", async () => {
        const word = await instance.getWord.call();
        assert.equal(word, "Hello Wolrd")
    });

    it("Set Word", async () => {
        await instance.setWord("Esto es una prueba", {from: accounts[1]})
        const word = await instance.getWord.call();
        assert.equal(word, "Esto es una prueba")
    });
});
