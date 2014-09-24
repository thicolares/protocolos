<?php
require_once "../vendor/autoload.php";

$dsn = "mysql:dbname=protocolos;host=localhost;charset=utf8";
$username = "root";
$password = "";

$pdo = new PDO($dsn, $username, $password);
$db = new NotORM($pdo);

$app = new Slim(array(
    "MODE" => "development",
    "TEMPLATES.PATH" => "./templates"
));

$app->get("/", function() {
    echo "<h1>SEMCOMP 2014</h1>";
	echo "<p>Pequeno webservice para experimentar com AngularJS.";
});

/**
 * EMPRESAS
 * ------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------
 */
$app->get("/empresa", function () use ($app, $db) {
    foreach ($db->empresa() as $empresa) {
		$empresas[]  = array(
            "id" => $empresa["id"],
            "nome" => $empresa["nome"],
            "descricao" => $empresa["descricao"],
            "telefone" => $empresa["telefone"]
        );
    }
    $app->response()->header("Content-Type", "application/json");
    echo json_encode($empresas);
});

$app->get("/empresa/:id", function ($id) use ($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $empresa = $db->empresa()->where("id", $id);
    if ($data = $empresa->fetch()) {
        echo json_encode(array(
			"id" => $data["id"],
			"nome" => $data["nome"],
			"descricao" => $data["descricao"],
			"telefone" => $data["telefone"]
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "Não existe um livro com o ID $id."
            ));
    }
});

$app->post("/empresa", function () use($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $empresa = $app->request()->post();
    $result = $db->empresa->insert($empresa);
    echo json_encode(array("id" => $result["id"]));
});

$app->put("/empresa/:id", function ($id) use ($app, $db) {
    $app->response()->header("Content-Type", "application/json");
    $empresa = $db->empresa()->where("id", $id);
    if ($empresa->fetch()) {
        $post = $app->request()->put();
        $result = $empresa->update($post);
        echo json_encode(array(
            "status" => (bool)$result,
            "message" => "Empresa atualizada com sucesso."
            ));
    }
    else{
        echo json_encode(array(
            "status" => false,
            "message" => "Não existe uma empresa com este o ID $id."
        ));
    }
});

$app->delete("/empresa/:id", function ($id) use($app, $db) {
    $app->response()->header("Content-Type", "application/json");
	$empresa = $db->empresa()->where("id", $id);
    if ($empresa->fetch()) {
        $result = $empresa->delete();
        echo json_encode(array(
            "status" => true,
            "message" => "Empresa removida com sucesso."
        ));
    }
    else{
        echo json_encode(array(
            "status" => false,
			"message" => "Não existe uma empresa com este o ID $id."
        ));
    }
});

/**
 * RECLAMACOES
 * ------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------
 */

$app->get("/reclamacao", function () use ($app, $db) {

	foreach ($db->reclamacao() as $reclamacao) {
		$reclamacaoData  = array(
			"id" => $reclamacao["id"],
			"titulo" => $reclamacao["titulo"],
			"data" => $reclamacao["data"],
			"resolvido" => $reclamacao["resolvido"],
			"empresa" => null,
			"comentarios" => array()
		);

		/**
		 * @todo aprender a fazer consulta com relationships seria bom! :)
		 */
		$idEmpresa = $reclamacao["empresa"];
		$empresa = $db->empresa()->where("id", $idEmpresa);
		if ($data = $empresa->fetch()) {
			$reclamacaoData["empresa"] = array(
				"id" => $data["id"],
				"nome" => $data["nome"],
				"descricao" => $data["descricao"],
				"telefone" => $data["telefone"]
			);
		}

		$reclamacoes[] = $reclamacaoData;
	}

	$app->response()->header("Content-Type", "application/json");
	echo json_encode($reclamacoes);
});


$app->get("/reclamacao/:id", function ($id) use ($app, $db) {
	$app->response()->header("Content-Type", "application/json");
	$reclamacao = $db->reclamacao()->where("id", $id);
	if ($data = $reclamacao->fetch()) {

		$reclamacaoData  = array(
			"id" => $data["id"],
			"titulo" => $data["titulo"],
			"data" => $data["data"],
			"resolvido" => $data["resolvido"],
			"empresa" => null,
			"comentarios" => array()
		);

		/**
		 * @todo aprender a fazer consulta com relationships seria bom! :)
		 */
		$idEmpresa = $data["empresa"];
		$empresa = $db->empresa()->where("id", $idEmpresa);
		if ($data = $empresa->fetch()) {
			$reclamacaoData["empresa"] = array(
				"id" => $data["id"],
				"nome" => $data["nome"],
				"descricao" => $data["descricao"],
				"telefone" => $data["telefone"]
			);
		}

		echo json_encode($reclamacaoData);
	}
	else{
		echo json_encode(array(
			"status" => false,
			"message" => "Não existe uma reclamação com o ID $id"
		));
	}
});


$app->run();
