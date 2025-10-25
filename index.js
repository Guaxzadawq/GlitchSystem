ObterKey.startRequestNetwork(
    RequestNetworkController.GET,
    "http://guaxzadawq.glitchsystem.github.io/", // seu link do replit
    "codigo",
    new RequestNetwork.RequestListener() {
        @Override
        public void onResponse(String tag, String response, HashMap<String, Object> responseHeaders) {
            try {
                JSONObject obj = new JSONObject(response);
                String codigoAtual = obj.getString("codigo");

                if(edittext_codigo.getText().toString().equals(codigoAtual)) {
                    SketchwareUtil.showMessage(getApplicationContext(), "✅ Código correto!");
                    // Aqui você pode liberar o acesso, tipo:
                    // Intent i = new Intent(getApplicationContext(), HomeActivity.class);
                    // startActivity(i);
                } else {
                    SketchwareUtil.showMessage(getApplicationContext(), "❌ Código incorreto!");
                }
            } catch (Exception e) {
                SketchwareUtil.showMessage(getApplicationContext(), "Erro: " + e.toString());
            }
        }

        @Override
        public void onErrorResponse(String tag, String message) {
            SketchwareUtil.showMessage(getApplicationContext(), "Erro de conexão!");
        }
    }
);
