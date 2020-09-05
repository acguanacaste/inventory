module.exports = {
    apps : [{
        name: 'lepidoptera',
        script: 'src/index.js',
        
        // Options reference: d    instances: 1,
        autorestart: true,
        watch: false,
        instance_var: 'INSTANCE_ID',
        max_memory_restart: '1G',
        error_file: '/srv/log/node/error-api.acguanacaste.ac.cr.log',
        out_file: '/srv/log/node/out-api.acguanacaste.ac.cr.log',
        log_file: '/srv/log/node/log-api.acguanacaste.ac.cr.log',
        env: {
            PORT: 3000,
            NODE_ENV: 'production',
            NODE_CONFIG_DIR: "/srv/www/api.acguanacaste.ac.cr/config/",
            error_file : '/srv/log/node/lepidoptera-error.log',
            log_file : '/srv/log/node/lepidoptera-log.log',
            out_file: '/srv/log/node/lepidoptera-out.log'
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 3000,
            NODE_CONFIG_DIR: "/srv/www/api.acguanacaste.ac.cr/config/",
            error_log: '/srv/log/node/lepidoptera-error.log',
            log_file: '/srv/log/node/lepidoptera-log.log',
            out_file: '/srv/log/node/lepidoptera-out.log'
        }
    }]
    
};
