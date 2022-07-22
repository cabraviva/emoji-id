const DEFAULT_LENGTH = 3

const crypto = require('crypto')
const emojis = require('emoji-json-list').list
const getSecureRandomNumberBetween = (min, max) => {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)
    const randomInt = crypto.randomBytes(1)[0]
    return randomInt % (maxInt - minInt + 1) + minInt
}
const getRandomEmoji = () => {
    const randomIndex = getSecureRandomNumberBetween(0, emojis.length - 1)
    return emojis[randomIndex][0]
}

const EmojiID = function EmojiID(length = DEFAULT_LENGTH) {
    let out = ''

    for (let i = 0; i < length; i++) {
        out += getRandomEmoji()
    }

    return out
}

EmojiID.calculateProbality = (length = DEFAULT_LENGTH) => {
    const totalEmojis = emojis.length
    
    // Calculate how high the chance is that a random emoji is the same as the previous one
    const chanceOfSameEmoji = totalEmojis

    // Calculate the chance of n random emojis being the same as the previous n
    const chanceOfSameEmojiN = chanceOfSameEmoji ** length

    // Return a string that represents the chance of n random emojis being the same as the previous n
    const chanceOfSameEmojiNPercentage = 100 / chanceOfSameEmojiN
    return `Every ${chanceOfSameEmojiN}th id is non unique when the length is ${length} (thats ${chanceOfSameEmojiNPercentage}%)`
}

module.exports = EmojiID