
$(function() {
    $('.eat').on('click', function(event) {
        
        console.log($(this).data('id'));
        
        let id = $(this).data('id');
        let newDevoured = $(this).data('newdevour');
        let newDevouredState = {
            devoured: newDevoured
        };
        console.log(`devour: ${id}`);
        
        $.ajax(`/burgers ${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(() => {
            console.log(`changed devour ${newDevoured}`);
            location.reload();
        }
        );
    });
    $('.#submit-button').on('submit', (event) => {
        event.preventDefault();
        let newBurger = {
            name: $('#add').val().trim()
        };
        $.ajax('/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() =>{
            console.log('created new burger');
            location.reload();
        });
    });
});
});