const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;

    const { userId, mail } = req.user;

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res
        .status(409)
        .send("You cannot send a friend request to yourself.")
    }

    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase(),
    });

    if (!targetUser) {
        return res
        .status(404)
        .send(
            `The e-mail ${targetMailAddress} cannot be found.`
        );
    }

    const invitationAlreadyRecieved = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id,
    });

    if (invitationAlreadyRecieved) {
        return res.status(409).send("Invitation has already been sent");
    }

    const usersAlreadyFriends = targetUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    );

    if (usersAlreadyFriends) {
        return res
            .status(409)
            .send("Already friends with this user.")
    }

    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id,
    });

    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

    return res
    .status(201)
    .send("Invitation sent!");
};

module.exports = postInvite;