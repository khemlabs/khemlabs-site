Vagrant.configure("2") do |config|

  config.vm.synced_folder ".", "/space/webapps/khemlabs-site"

  config.vm.define "site-redis" do |app|
    app.vm.provider "docker" do |d|
      d.image = "redis"
      d.name = "site-redis"
    end
  end
  
  config.vm.define "site-app" do |app|
    app.vm.provider "docker" do |d|
      d.name = "site-app"
      d.build_dir = "."
      d.link "site-redis:redishost"
      d.ports = [ "3000:3000", "9080:9080" ]
      d.cmd = ["/bin/bash", "local.sh"]
      d.env = {
        "GMAIL_USER"      =>  ENV['GMAIL_USER'],
        "GMAIL_PASSWORD"  =>  ENV['GMAIL_PASSWORD'],
        "EMAIL_TO"        =>  ENV['EMAIL_TO'],
        "DISABLE_EMAIL"   =>  ENV['DISABLE_EMAIL'] || false
      }
    end
  end
  
  config.vm.define "node-debug" do |app|
    app.vm.provider "docker" do |d|
      d.image = "khemlabs/node-inspector"
      d.name = "node-debug"
      d.cmd = ["node-inspector", "--web-port", "9080"]
      d.create_args = ["--net=container:site-app"]
    end
  end
  
end
