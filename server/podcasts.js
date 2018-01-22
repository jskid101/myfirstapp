let podcastLibrary = []

function generate(count) {
    let _sym = "abcdefghijklmnopqrstuvwxyz1234567890";
    let str = ''
 
    for(let i = 0; i < count; i++) {
        str += _sym[parseInt(Math.random() * (_sym.length))];
    }
    return str
 };
 function addIdtoItem(pod){
    return{...pod, _id: generate(10)};
 };


module.exports = {
    create: function(req, res){
        podcastLibrary.push(addIdtoItem(req.body))
        res.status(200).send('Podcast added')        
    },
    read: function(req, res){
        res.status(200).send(podcastLibrary)
    },
    update: function(req, res){
        console.log(req.body)
        podcastLibrary = req.body.display
        res.status(200).send('Updated from server')
    },
    delete: function(req, res){
        let newLibrary = podcastLibrary.filter((pod) => pod._id !== req.params._id)
        podcastLibrary = newLibrary
        res.status(200).send('Podcast deleted')
    }
};