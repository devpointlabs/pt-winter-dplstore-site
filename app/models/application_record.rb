class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  # self.primary_key = 'reference'
end
