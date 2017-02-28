<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

/**
 * Description of LoginController
 *
 * @author sebastien-javary
 */
class LoginController {

    /**
     * @Route("/login_check", name="log")
     */
    public function loginAction() {
        
    }

    /**
     * @Route("/login")
     */
    public function login() {
        return $this->render('default/login.html.twig');
    }

    /**
     * @Route("/logout")
     */
    public function logoutAction() {
        
    }

}
