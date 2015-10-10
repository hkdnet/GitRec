require 'simplecov'
SimpleCov.start

require 'minitest/autorun'
require 'dotenv'
require 'minitest/power_assert'

Dotenv.load

$LOAD_PATH.unshift(File.expand_path(__FILE__ + '/../../src'))

libs = %w(connections models services gateways)
libs.each do |ns|
  Dir[File.expand_path("../../src/#{ns}", __FILE__) << '/*.rb'].each do |file|
    require file
  end
end

libs.each do |ns|
  Dir[File.expand_path("../#{ns}", __FILE__) << '/*_test.rb'].each do |file|
    require file
  end
end
