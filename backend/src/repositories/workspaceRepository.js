import { StatusCodes } from "http-status-codes";
import Workspace from "../schema/workspace.js";
import User from "../schema/user.js";
import ClientError from "../utils/errors/clientError.js";
import crudRepository from "./crudRepository.js";
import User from "../schema/user.js";

const workspaceRepository = {
    ...crudRepository(Workspace),
    getWorkspaceByName: async function (workspaceName) {
        const workspace = await Workspace.findOne({
            name: workspaceName
        });

        if(!workspace) {
            throw new ClientError({
                explanation: 'Invalid data sent from the client',
                message: 'Workspace not found',
                statusCode: StatusCodes.NOT_FOUND
            });
        }

        return workspace;
    },
    getWorkspaceByJoinCode: async function (joinCode) {
        const workspace = await Workspace.findOne({
            joinCode: joinCode
        });

        if(!workspace) {
            throw new ClientError({
                explanation: 'Invalid data sent from the client',
                message: 'Workspace not found',
                statusCode: StatusCodes.NOT_FOUND
            });
        }

        return workspace;
    },
    addMemberToWorkspace: async function (workspaceId, memberId, role) {       
        const workspace = await Workspace.findById(workspaceId);

        if(!workspace) {
            throw new ClientError({
                explanation: 'Invalid data sent from the client',
                message: 'Workspace not found',
                statusCode: StatusCodes.NOT_FOUND
            });
        }

        const isValidUser = await User.findById(memberId);
        if (!isValidUser) {
            throw new ClientError({
                explanation: 'Invalid data sent from the client',
                message: 'User not found',
                statusCode: StatusCodes.NOT_FOUND
            });
        }

        workspace.members.push({
            memberId,
            role,
        });

        await workspace.save();
    },
    addChannelToWorkspace: async function () {

    },
    fetchAllWorkspaceByMemberId: async function () {

    }
};

export default workspaceRepository;