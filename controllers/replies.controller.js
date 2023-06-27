const Reply = require("../models/Replies");

async function getReplies(req, res) {
  try {
    const replies = await Reply.findAll({
      where: {
        tweetId: parseInt(req.params.tweetId),
      },
    });

    res.json(replies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createReply(req, res) {
  try {
    // create reply using data from request body
    // request body must contain all required fields defined in Replies model

    const reply = await Reply.create({
      ...req.body,
      tweetId: parseInt(req.params.tweetId),
    });

    res.json(reply);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateReply(req, res) {
  try {
    // User can only update their own reply
    // TESTING
    const tweet = await Reply.findByPk(parseInt(req.params.id))
    console.log("Update Reply: ", tweet)

    if(tweet.createdBy !== req.user.id) {
      console.log("Cannot update other people's reply")
    }

    // if (req.body.id !== req.user.id) {
    //   throw "Cannot update other people's reply"
    // } else {
    //   const reply = await Reply.update(...req.body, {
    //     where: {
    //       id: parseInt(req.params.id),
    //     },
    //   });
  
    //   res.json(reply);
    // }

  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteReply(req, res) {
  try {
    // User can only delete their own reply
    // TESTING

    const tweet = await Reply.findByPk(parseInt(req.params.id))
    console.log("Delete Reply:", tweet)

    if(tweet.createdBy !== req.user.id) {
      console.log("Cannot delete other people's reply")
    }

    // if (req.body.id !== req.user.id) {
    //   throw "Cannot delete other people's reply"
    // } else {
    //   const reply = await Reply.destroy({
    //     where: {
    //       id: parseInt(req.params.id),
    //     },
    //   });
  
    //   // Send deleted reply as response
    //   res.json(reply);
    // }

  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getReplies,
  createReply,
  updateReply,
  deleteReply,
};
