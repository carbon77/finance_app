package com.zakat.finance_app.controller;

import com.zakat.finance_app.model.Account;
import com.zakat.finance_app.model.User;
import com.zakat.finance_app.service.AccountService;
import com.zakat.finance_app.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("accounts")
@CrossOrigin
public class AccountController extends BasicController<Account, Long> {
    private final AccountService accountService;
    private final UserService userService;

    protected AccountController(AccountService accountService, UserService userService) {
        super(accountService);
        this.accountService = accountService;
        this.userService = userService;
    }

    /**
     * <p>Sets account's user</p>
     */
    @PostMapping("/{accountId}/user")
    public Account setUser(
            @PathVariable Long accountId,
            @RequestBody Long userId
    ) {
        Account account = accountService.findById(accountId).get();
        User user = userService.findById(userId).get();

        account.setUser(user);
        return accountService.save(account);
    }
}
