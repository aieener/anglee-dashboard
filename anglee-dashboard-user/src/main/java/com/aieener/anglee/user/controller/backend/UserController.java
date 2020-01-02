package com.aieener.anglee.user.controller.backend;

import com.aieener.anglee.user.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/login")
    public ModelAndView login(@RequestParam("username") String username,
                              @RequestParam("password") String password,
                              Map<String, Object> map
    ) {
        if (username == null) {
//            map.put("msg", )
            return new ModelAndView("common/error", map);
        } else {
            // login with user
            return new ModelAndView("common/success", map);
        }
    }
}
