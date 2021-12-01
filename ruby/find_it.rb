
# #first attempt
# def find_it(seq)
#   hash_counter = Hash.new(0)
#   seq.each { |num| hash_counter[num] += 1 }
#   hash_counter.each { |k,v| return k if v.odd? }
# end

#one-liner
def find_it(seq)
    seq.detect { |num| seq.count(num).odd? }    
end

p find_it([1,2,2,3,3,3,4,3,3,3,2,2,1])