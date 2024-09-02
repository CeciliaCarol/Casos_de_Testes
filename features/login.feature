Feature: Login de Usuário

  Background:
    Given que o usuário está na página de login

    Scenario: Login com número de telefone e senha corretos
    Given que o usuário está na página de login
    When o usuário insere seu número de telefone e senha corretos
    And clica no botão de login
    Then o usuário deve ser redirecionado para a página inicial

    Scenario: Login com nome de usuário e senha corretos
    Given que o usuário está na página de login
    When o usuário insere seu nome de usuário e senha corretos
    And clica no botão de login
    Then o usuário deve ser redirecionado para a página inicial

    Scenario: Login com email e senha corretos
    Given que o usuário está na página de login
    When o usuário insere seu email e senha corretos
    And clica no botão de login
    Then o usuário deve ser redirecionado para a página inicial

    Scenario: Login com número de telefone incorreto e senha correta
    Given que o usuário está na página de login
    When o usuário insere um número de telefone incorreto e a senha correta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Login com nome de usuário incorreto e senha correta
    Given que o usuário está na página de login
    When o usuário insere um nome de usuário incorreto e a senha correta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Login com email incorreto e senha correta
    Given que o usuário está na página de login
    When o usuário insere um email incorreto e a senha correta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Login com número de telefone correto e senha incorreta
    Given que o usuário está na página de login
    When o usuário insere um número de telefone correto e a senha incorreta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Login com nome de usuário correto e senha incorreta
    Given que o usuário está na página de login
    When o usuário insere um nome de usuário correto e a senha incorreta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Login com email correto e senha incorreta
    Given que o usuário está na página de login
    When o usuário insere um email correto e a senha incorreta
    And clica no botão de login
    Then o usuário deve ver uma mensagem de erro

    Scenario: Recuperação de senha com email
    Given que o usuário está na página de login
    When o usuário clica no link "Esqueci minha senha"
    And insere seu email registrado
    Then o usuário deve receber um email com instruções para redefinir a senha
