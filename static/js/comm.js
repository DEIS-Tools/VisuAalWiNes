let socket;

function comm_init() {
    socket = io();
    socket.on('models', function(data) {
        add_models(data);
    });
    socket.on('modelData', function(data) {
        load_model(data);
    });
    socket.on('queryResult', function(data) {
        show_queryResult(data);
    });
}
