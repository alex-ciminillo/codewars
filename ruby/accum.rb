# This time no story, no theory. The examples 
#below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which 
#includes only letters from a..z and A..Z.

#first-attempt
def accum(s)
	accum_str = ""
    s.each_char.with_index do |char, idx|
        (idx + 1).times do |num|
            num.zero? ? accum_str += char.upcase : accum_str += char.downcase 
        end
        accum_str += "-" unless idx == (s.length - 1)
    end
    accum_str
end

p accum("abcd")