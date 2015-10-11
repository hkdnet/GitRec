task :test do
  puts `ruby spec/test_all.rb`
end

task run: [:build, :deps] do
  puts 'start server...'
  `rackup -o 0.0.0.0`
end

task :build do
  puts 'start build js...'
  `babel public/js/src.js --optional runtime --out-file __tmp.js`
  `node_modules/browserify/bin/cmd.js __tmp.js -t babelify --outfile public/js/main.js`
  `rm __tmp.js`
  puts 'build was completed successfully!'
end

task :deps do
  puts 'copy toastr.min.css from node_modules'
  `cp node_modules/toastr/build/toastr.min.css public/css/toastr.min.css`
end
