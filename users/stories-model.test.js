const db = require('../data/db.js');
const stories = require('./stories-model.js');


// 4.
describe('stories-model', () => {
    beforeEach( async () => {
        await db('stories').truncate();
    })

    describe('insert function', () => {
        it('inserts a new story into db', async () => {
            let storyNumber;
            storyNumber = await db('stories');
            expect(storyNumber).toHaveLength(0);
            
        })
    })
})


// 6.
describe('remove()', () => {
    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('stories').truncate();
      });

    it('should be able to delete a track', async () => {
        await stories.insert({ "email": "Tripolar Dub", "text": "Akeos" })
        await stories.insert({ "email": "Wonton Bass", "text": "Aweminus" })

        let story = await db('stories');
        expect(story).toHaveLength(2);

        await stories.remove(1)
        story = await db('stories');
        expect(story).toHaveLength(1);
    
    });
    
    
});





