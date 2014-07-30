module.exports = function iomod(err, list) {
        if (!err) {
                for(var i = 0; i < list.length; i++) {
                        if(list[i].indexOf("." + filter) > -1) {
                                console.log(list[i]);
                        }
                }
        }
};

