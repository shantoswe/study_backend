const Barrons = require('../model/Barrons');
const words = require('../data/data');

const getBarrons = async (req, res) => {

    try{
        const words  = await Barrons.find();
        if(words){
            console.log(words.length);
        }
        res.status(200).json(words)
    }catch(error){
        res.status(404).send('notfound')
    }

};

const postBarrons = async (req, res) => {
    const data = req.body;
    console.log(data.name);

    if (data.name === 'abate') {
        try {
            // Using Promise.all to handle async operations
            const savedWords = await Promise.all(words.map(async (word) => {
                const newWord = new Barrons(word); // Pass the object directly
                return await newWord.save(); // Return the saved word
            }));

            const allWords = await Barrons.find(); // Await the find operation
            res.json(allWords); // Send the response with all words
        } catch (error) {
            console.error(error);
            res.status(500).send('Not saved'); // Use 500 for server errors
        }
    } else {
        res.status(400).send('Invalid word name'); // Handle invalid names
    }
};

module.exports = { getBarrons, postBarrons };
