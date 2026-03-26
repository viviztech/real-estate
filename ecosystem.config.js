module.exports = {
  apps: [
    {
      name: "landliya",
      cwd: "/mnt/newvolume/real-estate",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4000 -H 0.0.0.0",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
