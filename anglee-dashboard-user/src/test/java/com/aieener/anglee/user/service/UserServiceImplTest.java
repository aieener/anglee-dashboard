package com.aieener.anglee.user.service;

import com.aieener.anglee.user.dao.User;

import com.aieener.anglee.user.enums.ResultEnum;
import com.aieener.anglee.user.vo.ResultVO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import javax.transaction.Transactional;
import java.util.Date;

@SpringBootTest
public class UserServiceImplTest {
    @Autowired
    private IUserService userService;
    private String mockPassword = "1234abcd";
    private String mockUsername = "dajiangtang";
    private String mockemail = "dajiangtang@gmail.co";

    @Test
    @Transactional
    public void testSuccessfulRegister() {
        ResultVO<String> response = registerMockUser();
        Assert.isTrue(response.isSuccess(), "register user successfully");
    }

    @Test
    @Transactional
    public void testRegisterOnFailure() {
        registerMockUser();
        ResultVO<String> response = registerMockUser();
        Assert.isTrue(!response.isSuccess(), "can't register existing user");
        Assertions.assertEquals(response.getCode(), ResultEnum.REGISTER_FAIL_EXISTING_USERNAME.getCode());
    }

    @Test
    @Transactional
    public void testSuccessfulLogin() {
        registerMockUser();
        ResultVO res = userService.login(mockUsername, mockPassword);
        Assert.isTrue(res.isSuccess(), "successfully login");
    }

    @Test
    @Transactional
    public void testLoginFailureDueToIncorrectPassword() {
        registerMockUser();
        ResultVO res = userService.login(mockUsername, "123");
        Assert.isTrue(!res.isSuccess(), "login failure due to wrong password");
        Assertions.assertEquals(res.getCode(), ResultEnum.LOGIN_FAIL_INVALID_PASSWORD.getCode());
    }

    @Test
    @Transactional
    public void testLoginFailureDueToNonExistingUsername() {
        registerMockUser();
        ResultVO res = userService.login("asdf", mockPassword);
        Assert.isTrue(!res.isSuccess(), "login failure due to non existing username");
        Assertions.assertEquals(res.getCode(), ResultEnum.LOGIN_FAIL_NON_EXISTING_USER.getCode());
    }

    private ResultVO<String> registerMockUser() {
        User toRegister = new User();
        Date currentDate = new Date();
        toRegister.setPassword(mockPassword);
        toRegister.setUsername(mockUsername);
        toRegister.setEmail(mockemail);
        toRegister.setCreateTime(currentDate);
        toRegister.setUpdateTime(currentDate);
        return userService.register(toRegister);
    }
}
