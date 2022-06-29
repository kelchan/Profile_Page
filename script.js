// CHANGES NAME FROM ANOTHER CLASS/ID
function nameChange( element ) {
    document.querySelector( '#name' ).innerText = 'Kelvin Chan';
}

// function acceptRemove( element ) {
//     console.log('accept me', element)
//     document.querySelector( '#remove' ).remove();
//     if( element == '#acceptFriend' ) {
//         let likes = parseInt( document.querySelector( '#requests-noti').innerText );
//         console.log(likes);
//         likes++;
//         document.querySelector( '#requests-noti' ).innerText = likes + '+';
//     }
//     if( element == '#removeFriend' ) {
//         let likes = parseInt( document.querySelector( '#requests-noti').innerText );
//         console.log(likes);
//         likes--;
//         document.querySelector( '#requests-noti' ).innerText = likes + '+';
//     }
// }

function acceptRemove( element ) {
    let split = element.split( ',' );
    console.log( 'working...', split );
    if( split[0] == '#accept' ) {
        let likes = parseInt( document.querySelector( '#requests-noti' ).innerText );
        console.log(likes);
        likes++;
        document.querySelector( '#requests-noti' ).innerText = likes + '+';
    }
    if( split[0] == '#reject' ) {
        let likes = parseInt( document.querySelector( '#requests-noti').innerText );
        console.log(likes);
        likes--;
        document.querySelector( '#requests-noti' ).innerText = likes + '+';
    }
    if( split[1] == '#person1' ) {
        document.querySelector( '#person1' ).remove();
    }
    if( split[1] == '#person2' ) {
        document.querySelector( '#person2' ).remove();
    }
}