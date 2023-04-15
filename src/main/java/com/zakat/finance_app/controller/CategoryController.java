package com.zakat.finance_app.controller;

import com.zakat.finance_app.model.Category;
import com.zakat.finance_app.model.Transaction;
import com.zakat.finance_app.service.CategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController extends BasicController<Category, Long> {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        super(categoryService);
        this.categoryService = categoryService;
    }

    @GetMapping("{categoryId}/transactions")
    public List<Transaction> findTransactionsByCategory(@PathVariable Long categoryId) {
        return this.categoryService.findTransactionsByCategory(categoryId);
    }
}
