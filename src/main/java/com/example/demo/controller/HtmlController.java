package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Validated
public class HtmlController {
	@GetMapping("/")
    public String $(Model model) {
        //System.out.println(model.getAttribute("messageForm"));
        return "home";
    }
}
