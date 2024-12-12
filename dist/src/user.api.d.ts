import { UpdateUserDto } from "permission-engine/src/api/user/dto";
import { ApiClient } from "./api-client";
import { User } from "permission-engine/src/database/entity/user.entity";
export declare class UserAPI {
    private apiClient;
    constructor(apiClient: ApiClient);
    findSelf(): Promise<User>;
    findPublicData(id: string): Promise<User>;
    updateSelf(dto: UpdateUserDto): Promise<User>;
    addTopic(topicId: string): Promise<User>;
    removeTopic(topicId: string): Promise<User>;
}
