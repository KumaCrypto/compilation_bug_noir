use dep::mimc_sponge::mimc_sponge;

global KEY = 0;
fn main(x: Field, y: pub Field) {
    let x_hash: [Field; 1] = mimc_sponge([x], KEY);
    let y_hash: [Field; 1] = mimc_sponge([y], KEY);

    assert(x_hash[0] != y_hash[0]);
}

#[test]
fn test_main() {
    main(1, 2);
}

#[test(should_fail)]
fn test_main_fail() {
    main(1, 1);
}
