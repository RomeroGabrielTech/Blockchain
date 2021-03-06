import Block from './block';

describe('Block', () => {

    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 't3st-d4t4';
        hash = 'h4S4';
    });

    it('create an instance with parameter', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('use static hash()', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = '23cb3c52d46c05128eb2b2badbc46ce19dc3728bc63abd5fe890190dc0b2c5b0';

        expect(hash).toEqual(hasOutput);
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof Block.toString()).toEqual('string');
    });
});