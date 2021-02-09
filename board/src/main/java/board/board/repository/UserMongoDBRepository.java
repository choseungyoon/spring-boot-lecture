package board.board.repository;


import board.board.doc.UserDoc;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoDBRepository extends MongoRepository<UserDoc,String> {
    public UserDoc findByName(String name);
}