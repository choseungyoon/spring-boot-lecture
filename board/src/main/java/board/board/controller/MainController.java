package board.board.controller;

import board.board.doc.UserDoc;
import board.board.repository.UserMongoDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController
{
    @Autowired
    UserMongoDBRepository userMongoDBRepository;

    @RequestMapping(value = "/api", method = RequestMethod.GET)
    public List<UserDoc> Test() throws Exception{
        return userMongoDBRepository.findAll();
    }

}
