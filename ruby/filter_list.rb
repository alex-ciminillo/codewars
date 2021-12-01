#first attempt
def filter_list(l)
    # return a new list with the strings filtered out
    no_str_arr = []
    l.each { |el| no_str_arr << el if el.is_a?(Integer) } 
    no_str_arr
  end