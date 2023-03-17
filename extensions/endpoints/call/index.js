const axios = require('axios');
const { ForbiddenException } = require("directus");

module.exports = function versionInfo(router, logger) {
    router.get('/', (_req, res) => {
        // if (!_req.accountability.user) {
        //     throw new ForbiddenException("ACCESS DENIED");
        // }
        axios.get("https://api.github.com/users/hadley/orgs")
        .then(function (response) {
            // console.log(response);
            return res.json(
                response.data
            );
    
        });
    });
}
