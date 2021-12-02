

# #first attempt
# def nb_year(p0, percent, aug, p)
#     years = 0 
#     until p0 >= p
#         p0 = (p0 + (p0*(percent/100.0)) + aug).truncate
#         years += 1
#     end
#     return years
# end

#slightly optimized
def nb_year(p0, percent, aug, p)
    years = 0 
    until p0 >= p
        p0 += (p0*(percent/100.0)).to_i + aug
        years += 1
    end
    return years
end

p nb_year(1500, 5, 100, 5000)